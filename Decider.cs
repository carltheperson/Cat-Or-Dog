using System;
using System.Collections.Generic;

namespace Cat_Or_Dog
{
    class Decider {


        public static string Decide (int score, string seed) {
            if (seed == null) {
                throw new ArgumentNullException("Seed is null!");
            }
            
            var randomNumberSeq = (NumberFromSeed(seed) * score).ToString();
            var randomNumber = Int32.Parse(ReverseString(randomNumberSeq.Substring(randomNumberSeq.Length/2-1, randomNumberSeq.Length-1)))*score
                                *randomNumberSeq.Length*Int32.Parse(ReverseString(randomNumberSeq.Substring(0, randomNumberSeq.Length/2)));

            if (((int)randomNumber.ToString()[0]+(int)randomNumber.ToString()[randomNumber.ToString().Length-1]) % 2 == 0) {
                return "Cat";
            }
            
            return "Dog";
        }


        public static int NumberFromSeed (string seed) {
            var chars = new List<char>(seed);

            var total = 0;

            foreach (char seedBit in chars) {
                total += (int) seedBit;
            }

            return total;
        }

        public static string ReverseString(string str) {
            char[] array = str.ToCharArray();
            Array.Reverse(array);
            return new String(array);
        }

    }

}