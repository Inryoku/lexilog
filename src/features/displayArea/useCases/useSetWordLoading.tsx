import { useDispatch } from "react-redux";
import { setLoading } from "../slices/clickedWordSlice";

export const useStartWordProcessing = () => {
  const dispatch = useDispatch();
  return () => dispatch(setLoading(true));
};

export const useEndWordProcessing = () => {
  const dispatch = useDispatch();
  return () => dispatch(setLoading(false));
};
