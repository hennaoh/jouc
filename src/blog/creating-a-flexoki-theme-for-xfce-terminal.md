# Creating a Flexoki theme for XFCE Terminal

> **Started:** 9/4/25
> 
> **Finished:** 9/4/25
<!--more-->
## The Process

I woke up this morning and thought about how nice the Flexoki theme was (not exactly but I don't remember exactly what I was thinking). There are Flexoki themes for other terminal emulators, but not for xfce-terminal. Why? Anyway I decided to create one for my personal use and this is my documentation of the process.

I used the Flexoki documentation as a reference for the colours I used (it's a very easy to use reference) and the Catppuccin and Rosepine colour schemes to structure the theme. It was easier then I expected, and slightly underwhelming.

> **NOTE**
> This is not a manual for creating a theme for the xfce-terminal. I only copied and pasted from existing themes and filled in the blanks.


> **Fun fact:** The theme for this blog is also Flexoki-inspired.

### Flexoki Dark
- [Kepano](https://stephango.com), creator of the [Flexoki colour scheme](https://stephango.com/flexoki) advises that the 400 versions of the colours should be used for dark UIs. I didn't like how dark it was, especially since I like having my xfce-terminal transparent and I had to increase the opacity to actually see anything
- So I used the 300 variants instead, going a step lighter and I loved it!

### Flexoki Light
- This was easier than the dark version, since all I had to do was reverse the colours
- I don't see myself ever using this but it's always nice to have a light version in case I ever want to share it.

## The Theme
~~Eventually I'll upload the themes to Github, but for now anyone who wants can have the code~~ You can download the theme files [here](https://github.com/hennaoh/flexoki-for-xfce-terminal). Copy and paste the copied code into a text editor and save the theme as 'flexoki-dark/light**.theme**'. 
You can use it by placing the `.theme` file into `~/.local/share/xfce4/terminal/colorschemes`. If the `colorschemes` directory isn't already there, create it and put the file in there. To apply: *Edit* -> *Preferences* -> *Colours* -> *Presets* -> *Select Preset*.

### Dark

```
[Scheme]
Name=Flexoki Dark
ColorCursor=#FFFCF0
ColorForeground=#FFFCF0
ColorBackground=#100F0F
TabActivityColor=#88C0D0
ColorPalette=#12253B;#AF3029;#66800B;#AD8301;#205EA6;#A02F6F;#24837B;#5E409D;#163B66;#E8705F;#A0AF54;#DFB431;#66A0C8;#E47DA8;#5ABDAC;#A699D0
ColorBold=#FFFCF0
ColorBoldUseDefault=FALSE
```

### Light

```
[Scheme]
Name=Flexoki Light
ColorCursor=#100F0F
ColorForeground=#100F0F
ColorBackground=#FFFCF0
TabActivityColor=#88C0D0
ColorPalette=#163B66;#AF3029;#66800B;#AD8301;#205EA6;#A02F6F;#24837B;#5E409D;#12253B;#D14D41;#879A39;#D0A215;#4385BE;#CE5D97;#3AA99F;#8B7EC8
ColorBold=#100F0F
ColorBoldUseDefault=FALSE
```

#documenting