

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-5/12 mt-20 my-10 text-center">
            <p className="text-yellow-600 py-2">---{subHeading}---</p>
            <h2 className="text-4xl font-bold text-sky-700 uppercase border-y-4 py-4 text-center">{heading}</h2>
        </div>
    );
};

export default SectionTitle;