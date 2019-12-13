# Example for authentication with angular
Link tham khảo
https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1

## Tạo project
``` bash
# generate project
ng n angular-authen-example

# generate component and module
ng g c login --spec false
ng g c pageNotFound --spec false
ng g m dashboard 
ng g c dashboard/layout --spec false
ng g c dashboard/home --spec false 
ng g c dashboard/admin --spec false
```
- Công dụng của các compoennet
- component pageNotFound: page not found - khi truy cập vào link bất kì thì user sẽ được redirect qua trang này
- component login: để đăng nhập. Khi chưa đăng nhập thì từ các route được khai báo thì sẽ bay vào đây để yêu cầu đăng nhập
- module dashboard gồm:
    - layout: component layout cho home và admin
    - home: component cho phép mọi người đăng nhập truy cập được
    - admin: component cần đăng nhập với role là admin mới truy cập được