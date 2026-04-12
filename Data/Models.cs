namespace Bicazz.Data;

/// <summary>
/// Model data untuk transaksi kas.
/// Fungsi: Menyimpan informasi transaksi pemasukan atau pengeluaran.
/// </summary>
public record Transaction(long Id, string Type, decimal Amount, string Category, string Note, string Date);

/// <summary>
/// Model data untuk target tabungan.
/// Fungsi: Menyimpan nama target, nilai target, dan jumlah tercapai.
/// </summary>
public record Goal(long Id, string Name, decimal Target, decimal Current);
