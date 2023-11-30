/* eslint-disable react/prop-types */


const Container = ({children}) => {
    return (
        <div className="w-full px-2 max-w-7xl mx-auto">
            {children}
        </div>
    );
};

export default Container;