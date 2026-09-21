function validateTask(req,res,next){
	if (!req.body.title) {
    return res.status(400).json({ error: 'El campo title es obligatorio' });
  }
next();
}

module.exports= validateTask;
