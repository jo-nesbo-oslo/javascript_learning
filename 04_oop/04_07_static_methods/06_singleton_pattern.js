class DB{
    static instance
    constructor()
    {
        if(DB.instance)
        {
            return DB.instance
        }
        DB.instance=this
    }
  static  getinstance()
    {
        if(!DB.instance)
        {
            DB.instance=new DB()
        }
        return DB.instance
    }
}
const obj1=new DB()
const obj2=new DB()
console.log(obj1===obj2)
