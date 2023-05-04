import { createInjector, tokens } from 'typed-inject'

class Class1 {}
class Class2 {
  constructor(private readonly class1: Class1) {}
  static inject = tokens('Class1')
}
class Class3 {
  constructor(private readonly class2: Class2) {}
  static inject = tokens('Class2')
}
class Class4 {
  constructor(private readonly class3: Class3) {}
  static inject = tokens('Class3')
}
class Class5 {
  constructor(private readonly class4: Class4) {}
  static inject = tokens('Class4')
}
class Class6 {
  constructor(private readonly class5: Class5) {}
  static inject = tokens('Class5')
}
class Class7 {
  constructor(private readonly class6: Class6) {}
  static inject = tokens('Class6')
}
class Class8 {
  constructor(private readonly class7: Class7) {}
  static inject = tokens('Class7')
}
class Class9 {
  constructor(private readonly class8: Class8) {}
  static inject = tokens('Class8')
}
class Class10 {
  constructor(private readonly class9: Class9) {}
  static inject = tokens('Class9')
}
class Class11 {
  constructor(private readonly class10: Class10) {}
  static inject = tokens('Class10')
}
class Class12 {
  constructor(private readonly class11: Class11) {}
  static inject = tokens('Class11')
}
class Class13 {
  constructor(private readonly class12: Class12) {}
  static inject = tokens('Class12')
}
class Class14 {
  constructor(private readonly class13: Class13) {}
  static inject = tokens('Class13')
}
class Class15 {
  constructor(private readonly class14: Class14) {}
  static inject = tokens('Class14')
}
class Class16 {
  constructor(private readonly class15: Class15) {}
  static inject = tokens('Class15')
}
class Class17 {
  constructor(private readonly class16: Class16) {}
  static inject = tokens('Class16')
}
class Class18 {
  constructor(private readonly class17: Class17) {}
  static inject = tokens('Class17')
}
class Class19 {
  constructor(private readonly class18: Class18) {}
  static inject = tokens('Class18')
}
class Class20 {
  constructor(private readonly class19: Class19) {}
  static inject = tokens('Class19')
}
class Class21 {
  constructor(private readonly class20: Class20) {}
  static inject = tokens('Class20')
}
class Class22 {
  constructor(private readonly class21: Class21) {}
  static inject = tokens('Class21')
}
class Class23 {
  constructor(private readonly class22: Class22) {}
  static inject = tokens('Class22')
}
class Class24 {
  constructor(private readonly class23: Class23) {}
  static inject = tokens('Class23')
}
class Class25 {
  constructor(private readonly class24: Class24) {}
  static inject = tokens('Class24')
}
class Class26 {
  constructor(private readonly class25: Class25) {}
  static inject = tokens('Class25')
}
class Class27 {
  constructor(private readonly class26: Class26) {}
  static inject = tokens('Class26')
}
class Class28 {
  constructor(private readonly class27: Class27) {}
  static inject = tokens('Class27')
}
class Class29 {
  constructor(private readonly class28: Class28) {}
  static inject = tokens('Class28')
}
class Class30 {
  constructor(private readonly class29: Class29) {}
  static inject = tokens('Class29')
}
class Class31 {
  constructor(private readonly class30: Class30) {}
  static inject = tokens('Class30')
}
class Class32 {
  constructor(private readonly class31: Class31) {}
  static inject = tokens('Class31')
}
class Class33 {
  constructor(private readonly class32: Class32) {}
  static inject = tokens('Class32')
}
class Class34 {
  constructor(private readonly class33: Class33) {}
  static inject = tokens('Class33')
}
class Class35 {
  constructor(private readonly class34: Class34) {}
  static inject = tokens('Class34')
}
class Class36 {
  constructor(private readonly class35: Class35) {}
  static inject = tokens('Class35')
}
class Class37 {
  constructor(private readonly class36: Class36) {}
  static inject = tokens('Class36')
}
class Class38 {
  constructor(private readonly class37: Class37) {}
  static inject = tokens('Class37')
}
class Class39 {
  constructor(private readonly class38: Class38) {}
  static inject = tokens('Class38')
}
class Class40 {
  constructor(private readonly class39: Class39) {}
  static inject = tokens('Class39')
}
class Class41 {
  constructor(private readonly class40: Class40) {}
  static inject = tokens('Class40')
}
class Class42 {
  constructor(private readonly class41: Class41) {}
  static inject = tokens('Class41')
}
class Class43 {
  constructor(private readonly class42: Class42) {}
  static inject = tokens('Class42')
}
class Class44 {
  constructor(private readonly class43: Class43) {}
  static inject = tokens('Class43')
}
class Class45 {
  constructor(private readonly class44: Class44) {}
  static inject = tokens('Class44')
}
class Class46 {
  constructor(private readonly class45: Class45) {}
  static inject = tokens('Class45')
}
class Class47 {
  constructor(private readonly class46: Class46) {}
  static inject = tokens('Class46')
}
class Class48 {
  constructor(private readonly class47: Class47) {}
  static inject = tokens('Class47')
}
class Class49 {
  constructor(private readonly class48: Class48) {}
  static inject = tokens('Class48')
}
class Class50 {
  constructor(private readonly class49: Class49) {}
  static inject = tokens('Class49')
}

const injector = createInjector()
  .provideClass('Class1', Class1)
  .provideClass('Class2', Class2)
  .provideClass('Class3', Class3)
  .provideClass('Class4', Class4)
  .provideClass('Class5', Class5)
  .provideClass('Class6', Class6)
  .provideClass('Class7', Class7)
  .provideClass('Class8', Class8)
  .provideClass('Class9', Class9)
  .provideClass('Class10', Class10)
  .provideClass('Class11', Class11)
  .provideClass('Class12', Class12)
  .provideClass('Class13', Class13)
  .provideClass('Class14', Class14)
  .provideClass('Class15', Class15)
  .provideClass('Class16', Class16)
  .provideClass('Class17', Class17)
  .provideClass('Class18', Class18)
  .provideClass('Class19', Class19)
  .provideClass('Class20', Class20)
  .provideClass('Class21', Class21)
  .provideClass('Class22', Class22)
  .provideClass('Class23', Class23)
  .provideClass('Class24', Class24)
  .provideClass('Class25', Class25)
  .provideClass('Class26', Class26)
  .provideClass('Class27', Class27)
  .provideClass('Class28', Class28)
  .provideClass('Class29', Class29)
  .provideClass('Class30', Class30)
  .provideClass('Class31', Class31)
  .provideClass('Class32', Class32)
  .provideClass('Class33', Class33)
  .provideClass('Class34', Class34)
  .provideClass('Class35', Class35)
  .provideClass('Class36', Class36)
  .provideClass('Class37', Class37)
  .provideClass('Class38', Class38)
  .provideClass('Class39', Class39)
  .provideClass('Class40', Class40)
  .provideClass('Class41', Class41)
  .provideClass('Class42', Class42)
  .provideClass('Class43', Class43)
  .provideClass('Class44', Class44)
  .provideClass('Class45', Class45)
  .provideClass('Class46', Class46)
  .provideClass('Class47', Class47)
  .provideClass('Class48', Class48)
  .provideClass('Class49', Class49)
  // .provideClass('Class50', Class50)
