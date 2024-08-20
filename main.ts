gallinas = 5

def presionar_A():
global gallinas
gallinas += 1
print("Gallina entra. Total: ", gallinas)

def presionar_B():
global gallinas
if gallinas > 0:
    gallinas -= 1
print("Gallina sale. Total: ", gallinas)
    else:
print("No hay gallinas para salir.")

def agitar():
print("Total de gallinas: ", gallinas)

def presionar_A_B():
global gallinas
gallinas = 5
print("Conteo reiniciado. Total de gallinas: ", gallinas)