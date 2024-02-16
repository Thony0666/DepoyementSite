import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Waiter = ({ loadingState }) => {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //     setOpen(false);
  // };
  // const handleOpen = () => {
  //     setOpen(true);
  // };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingState}
      >
        <CircularProgress size={60} style={{ color: "#95c732" }} />
      </Backdrop>
    </div>
  );
};
Waiter.propTypes = {
  loadingState: PropTypes.bool,
};
export default Waiter;
