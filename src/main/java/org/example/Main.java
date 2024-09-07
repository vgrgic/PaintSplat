package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Welcome to time table math. Which level:");
        int level = Integer.parseInt(scanner.next());
        int numberOfCorrect = 0;
        int numberOfIncorrect = 0;

        while(true) {
            int firstNumber = getRandomNumber(level);
            int secondNumber = getRandomNumber(level);
            System.out.printf(firstNumber + "x" + secondNumber + "=");
            String input = scanner.next();
            int number = Integer.parseInt(input);
            if (number == firstNumber * secondNumber) {
                numberOfCorrect = numberOfCorrect + 1;
                System.out.println("correct!");
            }
            if (number != firstNumber * secondNumber) {
                numberOfIncorrect = numberOfIncorrect + 1;
                System.out.println("wrong! Correct answer is:"
                        + (firstNumber * secondNumber));
            }
            System.out.print("Total: incorrect:" + numberOfIncorrect);
            System.out.println(" correct:" + numberOfCorrect);
        }
    }

    static int getRandomNumber(int level) {
        if (level == 2)
            return (int) (Math.random() * 10) + 1;
        if (level == 3)
            return (int) (Math.random() * 20) + 1;
        if (level == 4)
            return (int) (Math.random() * 40) + 1;
        if (level == 5)
            return (int) (Math.random() * 80) + 1;
        return (int) (Math.random() * 5) + 1;
    }
}