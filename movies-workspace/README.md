# MoviesWorkspace

## Question
- Hiển thị dữ liệu từ component (.ts) qua template (.html)

- Hiển thị một object từ component qua template
    - Cách khai báo một object: dùng class hoặc interface
    - Tạo một object từ class
    - Hiển thị như bình thường

- __Pie__ - handle dữ liệu hiển thị ra 
    - Kết quả của vế trái là parameter của vế phải

- __Component__ là gì
    - Khai báo và sử dụng component
    - __decorator__: khai báo các metadatass

- __Data binding__
    - dữ liệu được bind vào trong input
    - one way binding: dữ liệu hiển thị ra form input và không bị thay đổi khi sửa
    - two way binding: dữ liệu vừa bind ra form input và bị thay đổi khi sửa
    - cách dùng: sử dụng __directive__
        - __[ngModel] :__ truyền dữ liệu
        - __(ngModel):__ truyền hàm
        - __[(ngModel)]:__ truyền cả hàm cả dữ liệu
    - chú ý:
        - phải import module __FormModule__ để sử dụng được các __directive__ trên
    - Tìm hiểu thêm về directive https://viblo.asia/p/directive-trong-angularjs-naQZRYWXKvx

- Hiển thị một danh sách các movies sử dụng __directive__ *ngFor
