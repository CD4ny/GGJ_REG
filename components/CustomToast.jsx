import { useEffect } from 'react';

const CustomToast = ({ message, show }) => {
  return (
    <div
      className="toast-container  p-3 top-0 end-0 me-3"
      id="toastPlacement"
      data-original-class="toast-container p-3"
    >
      <div
        className={`toast fade ${
          show ? 'show' : 'hide'
        } align-items-center text-bg-danger border-0 `}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomToast;
