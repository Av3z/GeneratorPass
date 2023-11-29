
export default function GeneratePassword(size, modalVisible){

    if (!modalVisible) {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*.,-_=+&"
        let password = ''
        for (let i =0, n = charset.length; i < size; i++){
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        
        console.log(password);
        return password.toString();
    }
}