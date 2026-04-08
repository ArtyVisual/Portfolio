import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const loadingStyle = {
  position: "top-center",
  autoClose: 90000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

const successStyle = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}


const errorStyle = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

const Err = ({ res }) => {
  return (
    <>
      {res?.data?.error?.map((items, index) => {
        return (
          <p className="mb-0" key={index}>{items.msg}</p>
        )
      })
      }
    </>
  );
}


export const errorSwal = (message = "Something went wrong!") => {
  Swal.fire({
    icon: "error",
    title: message,
    toast: true,
    position: "center",
    showConfirmButton: false,
    showCloseButton: true,         
    timerProgressBar: true,
    background: "#fff",
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer); 
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    customClass: {
      popup: 'error-toast',
    }
  });
};


export const successSwal = (message = "Task Successfull!") => {
  Swal.fire({
    icon: "success",
    title: message,
    toast: true,
    position: "center",
    showConfirmButton: false,
    showCloseButton: true,         
    timerProgressBar: true,
    background: "#fff",
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer); 
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    customClass: {
      popup: 'success-toast',
    }
  });
};

export const successToast = (message) => toast.success(message, successStyle);

export const errorToast = (message) => toast.error(message, errorStyle);

export const promiseToast = async (func, loading, success, error) => {
  try {
    let res = await toast.promise(
      typeof func.unwrap === 'function' ? func.unwrap : func,
      {
        pending: {
          render() {
            return loading || 'Hold on...';
          },
          ...loadingStyle
        },
        success: {
          render({ data }) {
            if (success === 'function') return success();
            return success || data?.message || 'success';
          },
          ...successStyle
        },
        error: {
          render(res) {
            if (Array.isArray(res?.data?.error)) return <Err res={res} />;
            return error || res?.data?.message || 'something went wrong';
          },
          ...errorStyle
        }
      }
    );
    return res;
  } catch (error) { return error }
};

export const debounceThrottle = (func, delay, interval) => {
  let timeout;
  let lastArgs;
  let lastCallTime = 0;

  const later = () => {
    const now = Date.now();
    if (now - lastCallTime >= (interval || delay)) {
      func(...lastArgs);
      lastCallTime = now;
    }
    timeout = null;
  };

  return (...args) => {
    lastArgs = args;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    const now = Date.now();
    if (now - lastCallTime >= (interval || delay)) {
      func(...args);
      lastCallTime = now;
    }
  };
};