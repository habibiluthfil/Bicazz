using Bicazz.Data;

namespace Bicazz.Features;

/// <summary>
/// Partial class untuk logika fitur Target Tabungan.
/// Fungsi: Menangani pembuatan target tabungan, penambahan progress, dan kontrol form.
/// </summary>
public partial class TabunganFeature
{
    private string name = string.Empty;
    private string target = string.Empty;
    private string progressAmount = string.Empty;
    private long? activeEditId;
    private readonly List<Goal> goals = new();

    /// <summary>
    /// Mengaktifkan mode edit untuk suatu target tertentu.
    /// </summary>
    /// <param name="id">ID target yang ingin diubah.</param>
    private void StartEdit(long id) => activeEditId = id;

    /// <summary>
    /// Membatalkan mode edit tanpa menyimpan perubahan.
    /// </summary>
    private void CancelEdit() => activeEditId = null;

    /// <summary>
    /// Membuat target tabungan baru setelah validasi input.
    /// </summary>
    private void CreateGoal()
    {
        if (string.IsNullOrWhiteSpace(name) || !decimal.TryParse(target, out var amount) || amount <= 0)
        {
            return;
        }

        goals.Add(new Goal(DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(), name.Trim(), amount, 0));
        name = string.Empty;
        target = string.Empty;
    }

    /// <summary>
    /// Menambahkan saldo ke target tabungan yang dipilih.
    /// </summary>
    /// <param name="id">ID target yang ingin ditambahkan progress.</param>
    private void AddProgress(long id)
    {
        if (string.IsNullOrWhiteSpace(progressAmount) || !decimal.TryParse(progressAmount, out var amount) || amount <= 0)
        {
            return;
        }

        var goal = goals.FirstOrDefault(g => g.Id == id);
        if (goal is not null)
        {
            var updatedCurrent = Math.Min(goal.Target, goal.Current + amount);
            var index = goals.IndexOf(goal);
            goals[index] = goal with { Current = updatedCurrent };
        }

        activeEditId = null;
        progressAmount = string.Empty;
    }
}
