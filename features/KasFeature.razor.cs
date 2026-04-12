using Bicazz.Data;

namespace Bicazz.Features;

/// <summary>
/// Partial class untuk logika fitur Pencatatan Kas.
/// Fungsi: Menangani input transaksi, perhitungan saldo, dan operasi hapus transaksi.
/// </summary>
public partial class KasFeature
{
    private string type = "expense";
    private string amount = string.Empty;
    private string category = "Kebutuhan";
    private string customCategory = string.Empty;
    private string note = string.Empty;
    private readonly List<Transaction> transactions = new();

    private string[] incomeCategories = new[] { "Gaji", "Uang Jajan", "Bonus", "Lainnya" };
    private string[] expenseCategories = new[] { "Kebutuhan", "Keinginan", "Tabungan", "Lainnya" };

    private IEnumerable<string> Categories => type == "income" ? incomeCategories : expenseCategories;

    private decimal TotalIncome => transactions.Where(t => t.Type == "income").Sum(t => t.Amount);
    private decimal TotalExpense => transactions.Where(t => t.Type == "expense").Sum(t => t.Amount);
    private decimal balance => TotalIncome - TotalExpense;

    /// <summary>
    /// Mengganti mode input transaksi antara pemasukan dan pengeluaran.
    /// </summary>
    private void SelectType(string selected)
    {
        type = selected;
        category = selected == "income" ? "Uang Jajan" : "Kebutuhan";
    }

    /// <summary>
    /// Menambahkan transaksi baru ke daftar ketika tombol submit ditekan.
    /// </summary>
    private void HandleAddTransaction()
    {
        if (!decimal.TryParse(amount, out var value) || value <= 0)
        {
            return;
        }

        var newTx = new Transaction(
            DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
            type,
            value,
            category == "Lainnya" ? (customCategory.Trim().Length > 0 ? customCategory : "Lainnya") : category,
            note,
            DateTime.Now.ToString("d")
        );

        transactions.Insert(0, newTx);
        amount = string.Empty;
        note = string.Empty;
        customCategory = string.Empty;
    }

    /// <summary>
    /// Menghapus transaksi berdasarkan id.
    /// </summary>
    /// <param name="id">ID transaksi yang ingin dihapus.</param>
    private void DeleteTransaction(long id)
    {
        var tx = transactions.FirstOrDefault(t => t.Id == id);
        if (tx is not null)
        {
            transactions.Remove(tx);
        }
    }
}
