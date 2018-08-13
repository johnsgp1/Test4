/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Util.resizeFile(input.files[0]).then(function(blob_data) {
      var fd = new FormData();
      fd.append("imageFile", blob_data);
      
    }, function(err_reason) {
      console.log(err_reason);
    });