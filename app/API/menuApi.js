import data from '../Helpers/menuList';

async function asyncCall(callback) {
  const delayInMilliseconds = 5000; //1 second

  setTimeout(function() {
    callback(data);
  }, delayInMilliseconds);
}

export const getMenuList = async () => {

  return new Promise((resolve, reject) => {
    asyncCall(resolve);
  });

};
