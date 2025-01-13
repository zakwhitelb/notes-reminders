// System
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { ToggleClickShowBy } from "../../../../shared/redux/slices/ShowBySlice";

// Icons
import { EndTime as EndTimeIcon } from "../../../../shared/assets/icons/EndTime.icon";
import { CreateTime as CreateTimeIcon } from "../../../../shared/assets/icons/CreateTime.icon";

function ShowFilter({ setResponse }) {
    const show_by = useSelector((state) => state.show_by.value); // Access `value` from the state
    const dispatch = useDispatch();

    useEffect(() => {
        // Ensure `show_by` is synchronized with localStorage on initial load
        const savedShowBy = localStorage.getItem("show_by") || "end_time";
        if (show_by !== savedShowBy) {
            dispatch(ToggleClickShowBy(savedShowBy));
        }
    }, [dispatch, show_by]);

    return (
        <div className="flex justify-center items-center gap-x-[15px]">
            {/* End Time Filter */}
            <div 
                onClick={() => {
                    dispatch(ToggleClickShowBy("end_time"))
                    setResponse("")
                }}
                className="flex flex-col cursor-pointer"
            >
                <div className="flex justify-center items-center gap-x-[5px]">
                    <EndTimeIcon />
                    <p className="text-[18px] text-[var(--black2white)] font-[heebo-regular]">
                        End time
                    </p>
                </div>
                
                {show_by === "end_time" && 
                    <div className="h-[2px] w-full bg-[var(--black2white)] rounded-full"></div>
                }
            </div>

            {/* Create Time Filter */}
            <div 
                onClick={() => {
                    dispatch(ToggleClickShowBy("create_time"))
                    setResponse("")
                }}
                className="flex flex-col cursor-pointer"
            >
                <div className="flex justify-center items-center gap-x-[5px]">
                    <CreateTimeIcon />
                    <p className="text-[16px] text-[var(--black2white)] font-[heebo-regular]">
                        Create time
                    </p>
                </div>
                
                {show_by === "create_time" && 
                    <div className="h-[2px] w-full bg-[var(--black2white)] rounded-full"></div>
                }
            </div>
        </div>
    );
}

ShowFilter.propTypes = {
    setResponse: PropTypes.func.isRequired,
};

export { ShowFilter };
