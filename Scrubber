import math #math module used for sqrt later

print "Scrubber Program"

heigth = float(raw_input("Enter Heigth of ductwork: "))

width = float(raw_input("Enter width of ductwork: "))

divider = raw_input("Does duct have center divider? Y or N: ") #if yes thickness must be subtracted from overall width

if divider == "y":
    thickness = float(raw_input("Enter thickness of divider: "))
    width -= thickness

top_deck = float(raw_input("Enter thickness of top deck: "))
area = round((heigth * width) / 144, 2) #creates area in sqft
heigth = float(heigth + top_deck)

mark2 = round(heigth / 2, 2) #this section tells you where to mark the pitot tube
mark1 = round(mark2 / 2, 2)
mark3 = round((mark1 + mark2), 2)

print "Top mark should be ", mark3
print "Center mark should be ", mark2
print "First mark should be ", mark1

port_numb = int(raw_input("Enter number of ports: ")) #the most common two are 5 or 6
readings = [] #sets up the list that will be used for the readings


def center_line(): #calculates centerline of duct
    global center
    if port_numb == 5:
        center = readings[8]
    elif port_numb == 6:
        center = (readings[8] + readings[11]) / 2
    return center


def initial_reading(): #sets up the input for the readings
    for i in range(port_numb * 3):
        x = float(raw_input("Enter reading: "))
        x = math.sqrt(x) * 4005
        readings.append(x)


initial_reading()
center_line()
total = sum(readings)
total = round(total, 0)
avg = round(total / 15, 0)
cfm = round(total / (port_numb * 3) * area, 0) #calculates CFM of total duct
cf = round(avg / center, 2) #calculates correlation factor
print "Total sum is: ", total
print "Avg is: ", avg
print "CFM is: ", cfm
print "Centerline is: ", round(center, 0)
print "Correlation Factor is: ", cf
