function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(this.content);
  }
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programacion Basica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCoruse) {
    if (newCoruse.isFree) {
      this.approvedCourses.push(newCoruse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos!"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCoruse) {
    if (newCoruse.lang !== "english") {
      this.approvedCourses.push(newCoruse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos en español!"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCoruse) {
    this.approvedCourses.push(newCoruse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCoruse) {
    this.approvedCourses.push(newCoruse);
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programacion Basica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curos Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curos Practico de HTML y CSS",
  lang: "english",
});

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPaths({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curos DataBusiness", "Curos Dataviz"],
});

const escuelaVgs = new LearningPaths({
  name: "Escuela de Videojuegos",
  courses: [cursoProgBasica, "Curos de Unity", "Curos de Unreal Engine"],
});

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelitofeliz@miguelitofeliz.com",
  instagram: "miguelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "feddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});
