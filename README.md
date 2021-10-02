# Frontend Mentor : Pomodoro App

```
Name : Pomodoro app
Description : This Pomodoro app will provide some tricky challenges,
              including building a circular progress bar.
              You'll also build a range of customizations, like colors and fonts.
Difficulty : 4-ADVANCED
Status: Progress
Challenge : https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G
```

## Thoughts

- lacks hover states on comps for `pomodoro`, `short break` and `long break` buttons. added something similar to design system definition of hover states.
- few requirements as to what is start state, what text to show are missing. winging it for now.
- not the best possible implementation on howd i like to handle the whole state of the system, but the idea was to keep small groups of contexts within the app. why? my original motivation was from the fact that i'd like least amount of computation to happen per render cycle on time re-render once the clock starts ticking down. if i go and start messing with font or colors, that action shouldn't lead to any sort of render related delays.
- now after i've completed the whole thing, i have a feeling that, that wasn't the case. these renders on font or color wont really change anything for my timer. i'd have to design a clever way to extract that information from the general state. why ? i'd want my useEffects to only fire when appropriate data changes, not on any sibling level changes.
- probably something like this

```json
{
  "font": "kumbh",
  "color": "red",
  "pomodoro": 25,
  "short": 5,
  "long": 10,
  "activeTabIndex": 0
  // all individual set functions
}
```

- i can also switch up the name of tabs instead of index, but hey, that isn't that big of a deal on the implementation
- now i can counter argue that i did handle it in a more modular way, and to that i say yes! thats valid argument. say in future the user decides to have a dark/light mode for colors. it would be easier to handle that with current situation where i have my "theme" context separate. it wouldn't be much different with a shared context, but hey, better opportunity to write a more readable/modular code.
