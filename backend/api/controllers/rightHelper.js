// return if user is admin or superadmin
exports.isAdmin = function(req) {
	return (req.user.status == "admin" || req.user.status == "superadmin");
}