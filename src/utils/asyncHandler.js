// we are passing function as a argument which will be further passed to try catch in async format
// using async and await
// const asyncHandler = (func) => async(req, res, next) => {
//     try {
//         await func(res, req, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// export {asyncHandler}

// using promises
const asyncHandler = (requestHandler) => {
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((error) => next(error))
    }
}

export {asyncHandler}