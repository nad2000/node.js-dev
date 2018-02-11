const users = [{
  id: 1,
  name: "andrew",
  schoolId: 101
}, {
  id: 2,
  name: "Jessica",
  schoolId: 999
}, {
  id: 3,
  name: "Rad",
  schoolId: 101
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 100
}, {
  id: 1,
  schoolId: 101,
  grade: 80
}];

const getGrades = schoolId => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter(g => g.schoolId === schoolId));
  });
}


const getUser = id => {
  return new Promise((resolve, reject) => {
    const user = users.find(u => u.id === id);

    if (user) resolve(user);
    else reject(`Unable to find user with ID of ${id}.`);
  });
}


const getStatus = id => {
  // return new Promise((resolve, reject) => {

  // });
  let user;
  return getUser(id).then(_user => {
    user = _user;
    return getGrades(user.schoolId);
  }).then(grades => {
    let avg = 0.0;
    if (grades && grades.length > 0)
      avg = grades.map(g => g.grade).reduce((a, b) => a + b) / grades.length;
    return `${user.name} has a ${avg}% in the class.`;
  });
}

getStatus(1).then(status => console.log(status)).catch(e => console.log("ERROR:", e));

// getGrades(101).then(grades => console.log(grades));
// getGrades(999).then(grades => console.log(grades));
// getGrades(42).then(grades => console.log(grades));
// getUser(2).then(user => console.log("USER:", user)).catch(e => console.log("ERROR:", e));
// getUser(42).then(user => console.log("USER:", user)).catch(e => console.log("ERROR:", e));

