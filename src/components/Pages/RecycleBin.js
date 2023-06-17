import { Button, Container } from "react-bootstrap";
import RecycleBinItems from "../List/RecycleBinItems";
import { useSelector, useDispatch } from "react-redux";
import { recycleBinActions } from "../store/recycle-bin";
import { sentBinData } from "../store/recycleBin-thunks";
import { useEffect } from "react";
const RecycleBin = () => {
  const binList = useSelector((state) => state.recycleBin.bin);
  const change = useSelector((state) => state.recycleBin.change);
  const dispatch = useDispatch();

  useEffect(() => {
    if (change) {
      dispatch(sentBinData(binList));
    }
  }, [change, binList, dispatch]);

  const emptyBinHandler = () => {
    dispatch(recycleBinActions.emptyBin());
  };
  return (
    <>
      <Container
        className="w-75"
        style={{
          position: "absolute",
          right: "2rem",
          top: "5rem",
          left: "7rem",
        }}
      >
        <div className="text-end">
          <Button onClick={emptyBinHandler}>Empty</Button>
        </div>
        <ul style={{ listStyle: "none" }}>
          {binList.map((item) => {
            return (
              <RecycleBinItems
                key={item.id}
                id={item.id}
                mail={item.mail}
                title={item.title}
                body={item.body}
              />
            );
          })}
        </ul>
      </Container>
    </>
  );
};
export default RecycleBin;
