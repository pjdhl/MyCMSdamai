import user_model from '../models/user'
const renderUserInfo = async () => {
    // 获取用户信息，再去渲染
    let _result = await user_model.info();
    // console.log(_result);
    if ( _result.status === 304 ) { // 用户没有登录信息
        alert('请重新登录')
        window.location.href = '/admin.html'
    } else {
        // console.log(_result.data)
        $('.nickname').html(_result.data.nickname)
    }    
    $('.exit-btn').click( async function () {
        localStorage.removeItem("token");
        window.location.href = "/admin.html";
    })
    $("#profile-setting").on("click",()=>{
        window.location.href = "/#/profile-list";
    })
}
export default {
    renderUserInfo
}