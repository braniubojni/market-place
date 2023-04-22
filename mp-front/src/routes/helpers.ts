interface Paths {
  [k: string]: string;
}

export const pathsPublic = {
  home: '/',
  prodDetails: '/product/:idOrSlug',
};

export const pathsPrivate: Paths = {
  accountSettings: '/account-settings',
};

export const paths: Paths = Object.assign({}, pathsPrivate, pathsPublic);

export const checkPathMatch = (pathName: string, paths: Paths): boolean => {
  const allPaths = Object.keys(paths).map((k) => paths[k]);
  const pathFirstSection = pathName.split('/')[1];
  let isMatch = false;
  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });
  return isMatch;
};
