//will check whether the fields are empty or not
export const checkEmpty = (data, unCheck) => {
  // console.log('unCheck: ', unCheck);
  // console.log("data : ", data);
  const emptyArr = [];
  for (let key in data) {
    // console.log('key: ', key);
    //
    if (
      typeof data[key] === "boolean" ||
      typeof data[key] === "number" ||
      unCheck?.includes(key)
    )
      continue;
    if (data[key] == undefined || data[key].trim() == "") {
      //
      emptyArr.push(key);
    }
  }
  // console.log('emptyArr: ', emptyArr);
  return emptyArr;
};

export function checkLinks(userInput) {
  // console.log('userInput: ', userInput);
  // console.log("inside cheklink");

  if (userInput != undefined) {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) {
      // console.log("false");
      return false;
    } else {
      // console.log("true");
      return true;
    }
  }
}

//
export function checkSocialLinks(userInput) {
  // console.log("userInput: ", userInput);
  let inValidArr = [];

  // console.log("inside cheklink");
  for (let key in userInput) {
    // console.log("key: ", userInput[key]);
    var res = userInput[key]?.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    if (res === null) {
      // console.log("res1: ", res);
      if (userInput[key] !== "") {
        inValidArr.push(key);
      }

      // return false;
    } else {
      // console.log("res2: ", res);
      // return true;
    }
  }
  // console.log("inValidArr: ", inValidArr);
  return inValidArr;
}

export function checkModalSocialLinks(userInput) {
  // console.log('userInput: ', userInput);
  let inValidArr = [];

  // console.log("inside cheklink");
  for (let key in userInput) {
    // console.log("key: ", userInput[key]);
    var res = userInput[key]?.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    if (res === null) {
      // console.log("res1: ", res);
      if (userInput[key] !== "") {
        inValidArr.push(key);
      }

      // return false;
    } else {
      // console.log("res2: ", res);
      // return true;
    }
  }
  // console.log("ModalinValidArr: ", inValidArr);
  return inValidArr;
}

export const checkSkillsEmpty = (data) => {
  //
  const emptyArr = [];
  for (let key in data) {
    //
    if (typeof data[key] === "boolean") continue;
    if (data[key] == undefined || data[key].trim() == "") {
      // emptyArr.push(key);
      return true;
    }
  }
  return false;
};

//will clear the input as file
export const emptyFileChoosen = (fileRef) => {
  fileRef.current.value = "";
};

export const checkDateSE = (startDate, endDate) => {
  //
  if (new Date(endDate).getTime() <= new Date(startDate).getTime()) return true;
  return false;
};

//Check whether the emailID is in proper format or not
//Should be included in docs
//----------------------------
//Email id can be in format : example.23-45@domain.co.in || example.23@domain.com
//Username can have letter a-z,  A-z, 0-9, -, .
//Domain name can have a-z, A-Z
//Domain extension can be of minimum length of 2 and maximum length 6 and can contain a-z (.com, .co)
//Optional domain extension can be of minimum length of 2 and maximum length 6 and can contain a-z (used with .co, example : .co.in, .co.us)
export const checkEmail = (emailID) => {
  //
  const pattern = /^([a-zA-z0-9\.-]+)@([a-zA-z]+)\.([a-z]{2,6})(.[a-z]{2,6})?$/;
  const isVerified = pattern.test(emailID);
  if (isVerified) {
    return true;
  }
  return false;
};

//Check whether the number is in proper format or not
//Should be included in docs
//----------------------------
//The number must start from number in range [6-8]
//The number must end in renge [0-9]
//Total length of the contact number should be 10

// 9131948962
export const checkNumber = (number) => {
  const pattern = /^([6-9])+([0-9]){9}$/;
  const isVerified = pattern.test(number);
  if (isVerified) {
    return true;
  }
  return false;
};

//REFERRAL CHECKS
export const checkActionEmpty = (data) => {
  //
  for (let key in data) {
    if (data[key] == undefined || data[key].trim() == "") {
      // emptyArr.push(key);
      return true;
    }
  }
  return false;
};

//Upload pool image

export const Imageuploader = async (files) => {
  console.log("files : ", files);
  //to get the files which are selected
  const data = new FormData();

  //To be changed with typ account - Cloudinary
  //appends the actual file which is uploaded
  data.append("file", files[0]); //file is located inside the files array
  data.append("upload_preset", "geekyimages");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/djcxatgf7/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  // inorder to get data
  const file = await res.json();
  console.log(file);
  return file;

  //}
};

export const checkEditChanged = (seq1, seq2) => {
  console.log('seq1 : ', seq1) ;
  console.log('seq2 : ', seq2) ;
  for (let item in seq1) {
    if (seq1[item] != seq2[item]) return false;
  }
  return true;
};
