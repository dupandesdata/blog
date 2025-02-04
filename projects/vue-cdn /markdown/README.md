Tujuan utama dari aplikasi ini adalah untuk mengambil data dalam format `.md` (Markdown) dari sebuah link dan mengonversinya menjadi HTML atau teks yang dapat dibaca. Aplikasi ini dirancang untuk menampilkan konten Markdown dengan cara menggunakan tag `html`.

### Fungsi Aplikasi
- Memasukkan URL untuk mengambil data Markdown.
- Memilih format output (HTML atau teks).
- Menyalin hasil konversi ke clipboard.

### Pemecahan Masalah
Salah satu masalah yang dihadapi adalah penggunaan CDN untuk mengonversi Markdown ke HTML yang seringkali mengalami error saat rendering. Dengan menggunakan pustaka Markdown dari CDN, pengguna mungkin mengalami kesulitan dalam menangani berbagai sintaks Markdown yang kompleks. Hal ini mengakibatkan tampilan yang tidak sesuai dan hasil yang tidak diinginkan.

### Penjelasan Bagian JavaScript
Bagian JavaScript dari aplikasi ini berfungsi untuk mengelola interaksi pengguna dan pengambilan data. Berikut adalah rincian fungsinya:

1. **Vue Instance**:
   
   - Menciptakan instance Vue yang menghubungkan data dan metode ke elemen HTML dengan ID `app`.

3. **Data**:

   - **`apiUrl`**: Menyimpan URL untuk mengambil data Markdown.

   - **`loading`**: Boolean untuk menunjukkan status loading saat data sedang diambil.

   - **`error`**: Menyimpan pesan kesalahan jika terjadi saat pengambilan data.

   - **`outputType`**: Menentukan format output yang diinginkan (teks atau HTML).

   - **`outputContent`**: Menyimpan konten hasil konversi dari data yang diambil.

4. **Methods**:

   - **`fetchData()`**:
   
     1. Mengatur status loading dan memulai permintaan GET menggunakan Axios.

     2. Jika berhasil, data Markdown diubah menjadi HTML dengan memanggil `markdownToHtml()`.

     3. Jika terjadi kesalahan, pesan akan disimpan untuk ditampilkan kepada pengguna.

   - **`copyToClipboard()`**:
   
     - Jika output adalah HTML, konten disalin langsung; jika teks, karakter HTML di-encode untuk menjaga format.

   - **`markdownToHtml(markdown, isText)`**:

     - Mengonversi teks Markdown menjadi HTML dengan menggunakan ekspresi reguler untuk mengganti sintaks Markdown dengan tag HTML yang sesuai.

### Kesimpulan
Dengan aplikasi ini, mengatasi masalah rendering Markdown dari CDN dan mendapatkan hasil yang lebih konsisten dan dapat diandalkan. JavaScript dalam aplikasi ini berperan penting dalam mengelola data.
