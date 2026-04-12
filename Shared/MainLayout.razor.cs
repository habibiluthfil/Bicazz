using Microsoft.AspNetCore.Components;

namespace Bicazz.Shared;

/// <summary>
/// Partial class untuk logika layout utama aplikasi.
/// Fungsi: Mengelola state tema gelap/terang dan menyediakan method toggle untuk layout global.
/// </summary>
public partial class MainLayout : LayoutComponentBase
{
    private bool darkMode;

    /// <summary>
    /// Toggle state dark mode.
    /// Saat dipanggil, nilai darkMode berbalik antara true/false.
    /// </summary>
    private void ToggleDarkMode()
    {
        darkMode = !darkMode;
    }
}
