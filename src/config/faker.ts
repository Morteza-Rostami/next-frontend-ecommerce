import {fakerFA as faker} from '@faker-js/faker'

faker.setDefaultRefDate(new Date('2020-01-01'));
faker.seed(1371);

export const fake = faker;
export default fake; 