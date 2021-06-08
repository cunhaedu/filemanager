import mongodb from '@config/mongodb';
import mongoose from 'mongoose';

const mongodbConfig = mongodb();

mongoose.Promise = global.Promise;

const connectionString =
  `mongodb://${mongodbConfig.USER}:${mongodbConfig.PASSWORD}@${mongodbConfig.HOST}/${mongodbConfig.BASE}`;

export default mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(client => {
  console.log('Conectado ao MongoDB!');
  console.log(`Base de Dados: ${mongodbConfig.BASE}`);
})
.catch(error => {
  console.log('Erro ao se conectar ao BD: ' + error);
});
