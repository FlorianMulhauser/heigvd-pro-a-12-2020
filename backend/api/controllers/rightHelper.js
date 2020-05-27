// return if user is admin or superadmin
exports.isAdmin = function(req) {
	return (req.user.status == "admin" || req.user.status == "superadmin");
}

/**
Permet de verifier qu'un utilisateur a bien le droit d'accès a ce cours
Parametre userCourse la liste de cours de l'utilisateur
Parametre courseId l'id dont on veut savoir si il fait partie de la liste de cours de l'utilisateur
Retourne vrai si l'utilisateur fait partie du cours
**/
exports.participateToCourse = function(userCourse,courseId) {
	return -1 != userCourse.indexOf(courseId)
}