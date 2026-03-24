const Category = require("../model/category");


// create one
exports.createCategory = async(req , res) =>{
    try{

        const {name,description} = req.body;

        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"Fill All Fields"
            });
        }

        const resp = await Category.create({name:name,description:description});

        return res.status(200).json({
                success:true,
                message:"category created",
                resp,
            })
    }catch(e){
        console.log("while creating category",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// fetch all
exports.showAllCategory = async(req,res) => {
    try{
        
        const allCategory = await Category.find({},{name:true,description:true});

        return res.status(200).json({
                success:true,
                message:"all category feched",
                allCategory,
            })        

    }catch(e){
        console.log("while fetching category",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// fetch one
exports.findCategory = async(req,res) => {
    try{
        
        const {id} = req.body;

        if(!id){
             return res.status(400).json({
                success:false,
                message:"Fill  Fields"
            });
        }

        const resCategory = await Category.findById(id).populate({path:"course" ,match:{status:"Published"}, populate:[{path:"instructor"},{path:"ratingAndReviews"}]}).exec();

        

        if(!resCategory){
            return res.status(404).json({
                success:false,
                message:"category not found"
            });
        }

        
        if(resCategory.course.length === 0){
            return res.status(404).json({
                success:false,
                message:"no course found"
            });
        }

        const selectedCourses = resCategory.course;

        const categoriesExceptSelected = await Category.find({
            _id:{$ne:id},
        }).populate({path:"course",match:{status:"Published"} , populate:[{path:"instructor"},{path:"ratingAndReviews"}]});

        let diffrentCourse = [];

        for(const category of categoriesExceptSelected){
            diffrentCourse.push(...category.course);
        }

        const allCategory = await Category.find().populate({path:"course",match:{status:"Published"} , populate:[{path:"instructor"},{path:"ratingAndReviews"}]});

        const allCourse = allCategory.flatMap((category) => category.course);

        const mostSellingCourses = allCourse.sort((a,b) => b.sold - a.sold).slice(0,10);

        return res.status(200).json({
                success:true,
                message:"category feched",
                data:resCategory,
                selectedCourses,
                diffrentCourse,
                mostSellingCourses
            })

    }catch(e){
        console.log("while feching tag",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

