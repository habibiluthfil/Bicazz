# Bicazz Blazor Migration

Proyek ini telah dimigrasikan dari React/JSX ke C# dengan Blazor WebAssembly.
Semua file React lama telah dipindahkan ke folder `archive-react` untuk referensi jika diperlukan.

## Struktur utama
- `Bicazz.csproj` - proyek Blazor WebAssembly
- `Program.cs` - bootstrap aplikasi
- `App.razor` - router dan layout utama
- `_Imports.razor` - direktif penggunaan global
- `Pages/` - halaman aplikasi
- `Shared/` - layout dan komponen bersama
- `Components/` - komponen UI reusable
- `Features/` - fitur aplikasi seperti kas, tabungan, dan split bill
- `Data/` - model dan konstanta
- `wwwroot/css/app.css` - styling utama

## Menjalankan aplikasi
Pastikan .NET SDK terinstal.

```bash
cd "c:\Users\Hp\OneDrive\Dokumen\Project.Bicazz\Bicazz"
dotnet restore
dotnet run
```

Aplikasi akan tersedia di `http://localhost:5000` atau alamat yang ditampilkan.

## Catatan
- Folder `archive-react/` berisi file React/JSX asli yang sudah tidak digunakan lagi.
- Jika ingin membersihkan, folder tersebut bisa dihapus setelah migrasi selesai.
