// Higher order functions
const withEnhancement = (WrappedComponent) => {
    return({isLoading , ...props}) => {
        if(isLoading) {
            return <div>Loading...</div>;
        }
        return <WrappedComponent {...props}/>
    };
};

const dataComponent = ({data}) => {
    return <div>Data: </div>
};

const DataComponentWithLoading = withEnhancement(dataComponent)
export default DataComponentWithLoading;