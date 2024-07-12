function validarFormulario() {
    var usuario = document.getElementById('uname').value.trim();
    var contraseña = document.getElementById('pwd').value.trim();

    if (usuario === '' || contraseña === '') {
        if (usuario === '') {
            document.getElementById('uname').classList.add('is-invalid');
            document.getElementById('uname').focus();
        } else {
            document.getElementById('uname').classList.remove('is-invalid');
            document.getElementById('uname').classList.add('is-valid');
        }

        if (contraseña === '') {
            document.getElementById('pwd').classList.add('is-invalid');
            if (usuario !== '') {
                document.getElementById('pwd').focus();
            }
        } else {
            document.getElementById('pwd').classList.remove('is-invalid');
            document.getElementById('pwd').classList.add('is-valid');
        }

        return false;
    }

    return true;
}