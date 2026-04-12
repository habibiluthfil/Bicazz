namespace Bicazz.Pages;

/// <summary>
/// Partial class untuk logika halaman produk.
/// Fungsi: Mengelola tab yang aktif dan menyediakan method untuk beralih antar fitur.
/// </summary>
public partial class Product
{
    private string activeTab = "kas";

    /// <summary>
    /// Mengubah tab aktif menjadi salah satu dari fitur yang tersedia.
    /// </summary>
    /// <param name="tab">Nama tab target, misalnya "kas", "tabungan", atau "split".</param>
    private void SetTab(string tab)
    {
        activeTab = tab;
    }
}
