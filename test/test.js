// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)
// ● Đầu vào: str
// ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// ● Ví dụ:
// ○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
// ○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
// ● Lưu ý: không sử dụng hàm reverse()

///             bài làm


// let str = prompt("người dùng nhập vào");
// you = "";
// for(i = str.length-1; i >= 0; i = i - 1){
//      you = you + str[i];
// }
// console.log(you);

// bài 2:
// : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// (1đ)
// ● Đầu vào: str
// ● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ● Ví dụ
// ○ Cho &quot;this is A Test&quot;; In ra &quot;This Is A Test&quot;
// ○ Cho &quot;hello rikkei academy&quot;; In ra &quot;Hello

//                            bài làm


// let love = prompt("mời bạn chuỗi kí tự").toLowerCase().split(" ");
// let what = " "
// for (let i = 0; i <= love.length - 1; i++) {
//     what = what + love[i].substring(0, 1).toUpperCase() + love[i].substring(1).toLowerCase() + " "
// } console.log(what);


// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ● Ví dụ
// ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ● Lưu ý: Không dùng hàm sort()


//         bài làm
// let is = [5, 6, 4, 7, 3, 8];
// for (i = 0; i <= is.length - 1; i = i + 1) {
//     for (let as = i + 1; as <= is.length - 1; as = as + 1){
    
//         if(is[i] > is[as]) {
//             temp = is[i];
//             is[i] = is[as];
//             is[as] = temp;
//         }
//     }
// }

// console.log(is);

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên 
//     nhân viên). Xây dựng chương trình quản lý nhân viên với các
//     chức năng (Read, Create, Update, Delete). (2đ)

// const rikkei = ["dũng","phú","cường"];

// let yes = prompt("nhập 4 chữ cái: C/ R/ U/ D/");
// if (yes === "C") {
//     let what = prompt("mời bạn nhập thêm nhân viên mới");
//     rikkei.push(what);
//     for (i = 0; i <= rikkei.length - 1; i = i + 1) {


//     }
//     console.log(i, rikkei);
// }

//  ///R — Read:

// else if (yes === "R") {

//     for (i = 0; i <= rikkei.length - 1; i = i + 1) {
//     } console.log(i, rikkei);

// }

//  //U — Update:

// else if (yes === "U") {
//     let your = Number(prompt("mời bạn nhập vị trí phần tử muốn update"));
//     let user = prompt("mời bạn nhập nội dung muốn update");
//     rikkei[your] = user;
//     for (i = 0; i <= rikkei.length - 1; i = i + 1){

//     }    console.log(i, rikkei);  
// }
//  //D — Delete:

// else if(yes === "D"){
//      let no = Number(prompt("nhập vị trí của todo muốn delete"));
//      rikkei.splice(no);
//      for(i = 0; i <= rikkei.length-1; i = i + 1){
                 
//     }console.log(i, rikkei)
// }    


// bài 3
// : Viết một chương trình xóa các phần tử trùng của một
// mảng và in ra kết quả. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ● Ví dụ
// ○ Cho
// Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
// ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// aye = [1,2,3,2,4,3,5,4,2,6];

//  let eya = [...new Set(aye)];

//  console.log(eya);



 // bài 6:
//  : Viết chương trình cho phép người dùng nhập vào ngày
// tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ● Ví dụ
// ○ Ngày 30/4/2019 là ngày hợp lệ
// ○ Ngày 29/2/2019 là ngày không hợp lệ
// ● Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30]
// và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2
// năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ● Ví dụ
// ○ Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○ Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021

let iam = Number(prompt("mời bạn nhập ngày tháng năm"));
if (nam<0, thang<0, thang> 12, ngay<0, ngay> 31);
    if ((nam%4==0 && nam%100!=0) || (nam%400==0));



































