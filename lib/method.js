// Tìm ra 1 số lớn nhất trong mảng
/**
 * Hàm nhận vào input là 1 mảng arrNumber. Ví dụ  arrNumber [1,3,4,5,9] trả ra vị trí số lớn nhất
 * @param {*} arrNumber : arrNumber là 1 mảng số
 * @returns trả ra vị trí index có giá trị lớn nhất 
 */

function findIndexMax(arrNumber) {// input : arrNumber [1,3,4,5,9]

    var indexMax = 0;
    // progress
    var max = arrNumber[0];
    for (var index = 0; index < arrNumber.length; index++) {

        if (arrNumber[index] > max) {

            max = arrNumber[index];
            indexMax = index;
        }
    }

    return indexMax;

}

// Tìm ra 1 số nhỏ nhất trong mảng
/**
 * Hàm nhận vào input là 1 mảng arrNumber. Ví dụ  arrNumber [1,3,4,5,9] trả ra vị trí số lớn nhất
 * @param {*} arrNumber : arrNumber là 1 mảng số
 * @returns trả ra vị trí index có giá trị nhỏ nhất 
 */

function findIndexMin(arrNumber) {// input : arrNumber [1,3,4,5,9]

    var indexMin = 0;
    // progress
    var min = arrNumber[0];
    for (var index = 0; index < arrNumber.length; index++) {

        if (arrNumber[index] < min) {

            min = arrNumber[index];
            indexMin = index;
        }
    }

    return indexMin;

}
/** Hàm nhận vào arrNumber( danh sách điểm ) và diemGioi (điểm quy định bao nhiêu là điểm giỏi)
 * 
 * @param {*} arrNumber  arrNumber : là mảng danh sách điểm. Ví dụ arrNumbe[7,8,9,10]
 * @param {*} diemGioi  diemGioi : là điểm quy định bao nhiêu điểm là gioi . Ví dụ : 8
 * @returns returns  : kết quả trả ra là số lượng sinh viên có điểm => điểm giỏi
 */

function demSinhVienGioi(arrNumber, diemGioi) {

    // output : soLuongSV Gioi : number

    var output = 0;
    for (var index = 0; index < arrNumber.length; index++) {

        if (arrNumber[index] >= diemGioi) {

            output ++; // Tăng số lượng sinh viên giỏi 
        }
    }

    return output;
}
/** Hàm nhận vào 1 mảng arrDiem, mảng arrTen, diemTB 
 * 
 * @param {*} arrDiem arrDiem  : mảng điểm 
 * @param {*} arrTen  arrTen : mảng tên ứng với mảng điểm
 * @param {*} diemTB 
 * @returns kết quả trả về là html 
 */

function inDanhSachSVTren5 (arrDiem, arrTen, diemTB){ // arrDiem[5,6,7,8,9], arrTen['A','B','C'], diemTB : 5

    // ['C','D'] => 'C' <br/> 'D' : [] - ''

    var output = '';
    for ( var index = 0; index < arrDiem.length; index++){

        if( arrDiem[index] >= diemTB){
            // Nếu điểm lớn hơn diemTB tại vị trí index đó thì lấy tên tạo vị trí index tương ứng đó + vào kết quả
            output = output +  '<br/>' + arrTen[index]; // output +=  '<br/>' + arrTen[index]
        }
    }

    return output;
}
