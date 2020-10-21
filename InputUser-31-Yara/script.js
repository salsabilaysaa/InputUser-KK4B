alert("Selamat Datang Di Pendaftaran hiGirls!") // welcome
function sub(){
  // Variable
  var nama = document.getElementById('nama').value;
  var email = document.getElementById("email").value;
  var negara = document.getElementById("negara").value;
  var tahun = document.getElementById("tahun").value;
  var jk = document.getElementsByName("gender");
  var gender = '';
  var umur = 2020 - tahun;

  // Checked For Gende [Pria/Wanita/Tidak Terdefinisi]
  for (var a = 0; a < jk.length; a++) {
    if(jk[a].checked == true){
      gender = jk[a].value;
      break;
    }
  }
  
  // Let For Output
  let x = document.getElementById('hem');
  let y = '';

  // if the input is empty
  if( nama == '' || email == '' || negara == '' || tahun == '' || gender == '') {
	        if(nama == '') y += '<p><b>Nama Belum Di Isi</b></p>'; // Nama is null
	        if(email == '') y += '<p><b>Email Belum Di Isi</b></p>'; // Email is null
	        if(negara == '') y += '<p><b>Negara Belum Di Isi</b></p>'; // Negara is null
	        if(tahun == '') y += '<p><b>Tahun Belum Di Isi</b></p>'; // Tahun is null
	        if(gender == '') y += '<p><b>Jenis Kelamin Belum Di Isi</b></p>'; // Gender is null
      }else{ //If the input is full
        // html in let y
		    y += `<b><h2>Selamat Datang Di hiGirls!</h2> 
		    <table>
		      <tr>
		        <td>Nama Lengkap </td>
		        <td>:</td>
		        <td>${nama}</td>
		      </tr>
		      <tr>
		        <td>Email </td>
		        <td>:</td>
		        <td>${email}</td>
		      </tr>
		      <tr>
		        <td>Jenis Kelamin </td>
		        <td>:</td>
		        <td>${gender}</td>
		      </tr>
		      <tr>
		        <td>Negara </td>
		        <td>:</td>
		        <td>${negara}</td>
		      </tr>
		      <tr>
		        <td>Umur Anda </td>
		        <td>:</td>
		        <td>${umur} Tahun</td>
		      </tr>
		    </table>`;
		  }
    x.innerHTML = y; // Data y is inputted to x

    // Console in inspect element
    console.log(`
    Nama Lengkap    = ${nama}
    Email           = ${email}
    Jenis Kelamin   = ${gender}
    Negara          = ${negara}
    Umur Anda       = ${umur}`);

    // Thanks
    alert("Thanks For Registration " + nama);
}