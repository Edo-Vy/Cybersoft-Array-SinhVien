// Tìm sinh viên có điểm cao nhất 

document.querySelector('#btnSVCaoDiemNhat').onclick = function () {

    // input : mảng điểm : arrDiem[], arrTenSV
    var arrTagTDDiem = document.querySelectorAll('#tblBody :nth-child(4)');
    // console.log( arrTagTDDiem);
    var arrDiem = [];
    for (var index = 0; index < arrTagTDDiem.length; index++) {
        // Mỗi lần duyệt qua thẻ td lấy ra innerHTML điểm
        var diem = Number(arrTagTDDiem[index].innerHTML);
        //Thêm vào input arrDiem
        arrDiem.push(diem);
    }
    // Lấy input arrTen
    var arrTagTDTen = document.querySelectorAll('#tblBody :nth-child(3)');
    var arrTen = [];
    for (var index = 0; index < arrTagTDTen.length; index++) {
        // Mỗi lần duyệt qua thẻ td lấy ra innerHTML tên
        var ten = arrTagTDTen[index].innerHTML;
        arrTen.push(ten);
    }
    console.log(arrTen);
    console.log(arrDiem);
    //output : String 
    var output = '';
    //progress
    /* === findIndexMax
    var max = arrDiem[0]; // Đặt biến cờ, phần tử thứ 0 lớn nhất
    var indexMax = 0;
    for (var index = 0; index < arrDiem.length; index++) {
        if (arrDiem[index] > max) { // Nếu có phần tử nào lớn hơn max => max = phần tử đó

            max = arrDiem[index];
            indexMax = index;
        }
    }
    */

    var indexMax = findIndexMax(arrDiem);
    output = ' Sinh viên có điểm cao nhất ' + arrTen[indexMax] + ' - ' + arrDiem[indexMax];
    // In output ra giao diện 
    document.querySelector('#svGioiNhat').innerHTML = output;

}
// Tìm sinh viên có điểm thấp nhất 
document.querySelector('#btnSVThapDiemNhat').onclick = function () {

    //input : arrDiem : arrTen
    var arrTagTDDiem = document.querySelectorAll('#tblBody :nth-child(4)');

    var arrDiem = [];
    for (var index = 0; index < arrTagTDDiem.length; index++) {
        var diem = Number(arrTagTDDiem[index].innerHTML);
        arrDiem.push(diem);
    }

    var arrTagTDTen = document.querySelectorAll('#tblBody :nth-child(3)');
    var arrTen = [];
    for (var index = 0; index < arrTagTDTen.length; index++) {
        // Mỗi lần duyệt qua thẻ td lấy ra innerHTML tên
        var ten = arrTagTDTen[index].innerHTML;
        arrTen.push(ten);
    }

    //output : String 
    var output = '';
    /* 
     var min = arrDiem[0];
     var indexMin = 0;
     for (var index = 0; index < arrDiem.length; index++) {
 
         if (arrDiem[index] < min) {
 
             min = arrDiem[index];
             indexMin = index;
         }
     }
     */
    var indexMin = findIndexMin(arrDiem);

    output = ' Sinh viên có điểm thấp nhất là : ' + arrTen[indexMin] + ' - ' + arrDiem[indexMin];
    document.querySelector('#svYeuNhat').innerHTML = output;
}


// Đếm số lượng sinh viên giỏi

document.querySelector('#btnSoSVGioi').onclick = function () {
    // input : arrDiem
    var arrTagTDDiem = document.querySelectorAll('#tblBody :nth-child(4)');

    var arrDiem = [];
    for (var index = 0; index < arrTagTDDiem.length; index++) {

        var diem = Number(arrTagTDDiem[index].innerHTML);
        arrDiem.push(diem);
    }

    //output: soLuongSVGioi : number
    var soLuongSVGioi = 0;
    soLuongSVGioi = demSinhVienGioi(arrDiem, 8);
    //In output ra giao diện
    document.querySelector('#soSVGioi').innerHTML = soLuongSVGioi;

}

// Danh sách sinh viên có điểm trung bình lớn hơn 5

document.querySelector('#btnSVDiemHon5').onclick = function(){

     // input : arrDiem
     var arrTagTDDiem = document.querySelectorAll('#tblBody :nth-child(4)');

     var arrDiem = [];
     for (var index = 0; index < arrTagTDDiem.length; index++) {
 
         var diem = Number(arrTagTDDiem[index].innerHTML);
         arrDiem.push(diem);
     }

     var arrTagTDTen = document.querySelectorAll('#tblBody :nth-child(3)');
    var arrTen = [];
    for (var index = 0; index < arrTagTDTen.length; index++) {
        // Mỗi lần duyệt qua thẻ td lấy ra innerHTML tên
        var ten = arrTagTDTen[index].innerHTML;
        arrTen.push(ten);
    }

    //output : Tên các sv trên 5 : String 

    var tenSVTB = '';
    tenSVTB = inDanhSachSVTren5(arrDiem,arrTen, 5);
    //In output ra giao diện
    document.querySelector('#dsDiemHon5').innerHTML = tenSVTB;

}


// Sắp xếp điểm tăng dần
document.querySelector('#btnSapXepTang').onclick = function(){

    var arrTagTDDiem = document.querySelectorAll(('#tblBody :nth-child(4)'));
    var arrDiem = [];
    for (var index = 0; index < arrTagTDDiem.length; index++){

        var diem = Number(arrTagTDDiem[index].innerHTML);

        arrDiem.push(diem);
    }
    
    //output : arrDiemSX đã sắp xếp
    var arrDiemSX = [];
    arrDiemSX = sapXepTangDanSo(arrDiem);
    document.querySelector('#dtbTang').innerHTML = arrDiemSX;

}
