import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const appointmentId = searchParams.get("appointmentId");

  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  const verifyStripe = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/verifyStripe`,
        { success, appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      navigate("/my-appointments");
    } catch (error) {
      console.error(error);
      toast.error("Verification failed. Please try again.");
      navigate("/my-appointments");
    }
  };

  useEffect(() => {
    if (token && appointmentId && success) {
      verifyStripe();
    } else {
      toast.error("Invalid or missing verification data.");
      navigate("/my-appointments");
    }
  }, [token]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-green-700 font-medium">Verifying your payment...</p>
    </div>
  );
};

export default Verify;
