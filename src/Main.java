import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a palindrome: ");
        String userPalin = input.next();
        System.out.print(isPalindrome(userPalin));

    }

    public static boolean isPalindrome(String palindrome) {
        String forwardConcat = "";
        String backwardConcat = "";
        boolean stringsEqual = false;
        for (int i = 0; i <= palindrome.length() - 1; i++) {
            forwardConcat += palindrome.charAt(i);
        }

        for (int j = palindrome.length() - 1; j >= 0; j--) {
            backwardConcat += palindrome.charAt(j);
        }

        if (forwardConcat.equals(backwardConcat)) {
            stringsEqual = true;
        }

        return stringsEqual;
    }
}
