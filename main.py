import turtle
import time

t = turtle.Turtle()
t.speed(10)
t.color("red")
t.pensize(10)
t.penup()
t.goto(-200, 0)
t.setposition(-220, -170)
t.pendown()
t.write("I ", font=("Georgia", 140, "bold"))
t.penup()
t.goto(20, -10)
t.pendown()


t = turtle.Turtle()
t.speed(10)


def heart():
    t.begin_fill()
    t.left(140)
    t.forward(111.65)
    t.circle(-45, 180)
    t.setheading(60)
    t.circle(-45, 180)
    t.forward(111.65)
    t.end_fill()


t.color("red")
heart()
t.penup()
t.goto(80, 0)
t.setposition(150, 100)
t.pendown()


t.write("U", font=("Verdana", 140, "bold"))


t.hideturtle()

t = turtle.Turtle()

colors = ["orange", "yellow", "green", "blue", "indigo", "violet"]

while True:
    for color in colors:
        t.screen.bgcolor(color)
        time.sleep(1)


turtle.done()
