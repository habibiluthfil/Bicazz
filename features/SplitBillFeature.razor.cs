namespace Bicazz.Features;

/// <summary>
/// Partial class untuk logika fitur Split Bill.
/// Fungsi: Menghitung pembagian tagihan per orang berdasarkan total dan jumlah peserta.
/// </summary>
public partial class SplitBillFeature
{
    private string mainBill = string.Empty;
    private int people = 2;
    private SplitResult? result;

    /// <summary>
    /// Menghitung hasil pembagian tagihan.
    /// </summary>
    private void Calculate()
    {
        var total = decimal.TryParse(mainBill, out var value) ? value : 0;
        if (people <= 0)
        {
            people = 1;
        }

        result = new SplitResult(total, total / people, people);
    }

    /// <summary>
    /// Mengosongkan hasil perhitungan sehingga pengguna bisa menghitung ulang.
    /// </summary>
    private void Reset()
    {
        result = null;
    }

    private record SplitResult(decimal Total, decimal PerPerson, int People);
}
