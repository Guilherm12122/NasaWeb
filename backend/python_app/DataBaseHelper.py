import pymysql


class DataBaseHelper:
    @staticmethod
    def getConn(host, psw, user, port, database):
        try:
            conn = pymysql.connect(db=database, user=user, passwd=psw,
                                   host=host, port=port)
        except Exception as error:
            print(f"Não foi possível se conectar com o banco de dados: {error}")
   
        return conn

