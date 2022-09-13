import Swal from 'sweetalert2';

const deleteAlert = async () => {
  const status = await Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });

  if (status.isConfirmed) {
    return true;
  } else {
    return false;
  }
};

const successAlert = (pMessage) => {
  Swal.fire({
    icon: 'success',
    title: pMessage,
    showConfirmButton: false,
    timer: 2000,
  });
};

const errorAlert = (pMessage) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: pMessage,
  });
};

export { deleteAlert, successAlert, errorAlert };