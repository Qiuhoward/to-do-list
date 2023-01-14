//alt+b begin
import java.util.ArrayList;
import java.util.Iterator;
public class dd2{
    public static void main(String[] args) {
    
        ArrayList<Integer> list=new ArrayList<>();
        for(int i=0;i<10;i++){
            list.add(i);
        }

        Iterator<Integer>it=list.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }

    }
   } 