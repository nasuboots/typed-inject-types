import { createInjector, tokens } from 'typed-inject'

const func1 = () => {}
const func2 = () => {}
func2.inject = tokens('func1')
const func3 = () => {}
func3.inject = tokens('func2')
const func4 = () => {}
func4.inject = tokens('func3')
const func5 = () => {}
func5.inject = tokens('func4')
const func6 = () => {}
func6.inject = tokens('func5')
const func7 = () => {}
func7.inject = tokens('func6')
const func8 = () => {}
func8.inject = tokens('func7')
const func9 = () => {}
func9.inject = tokens('func8')
const func10 = () => {}
func10.inject = tokens('func9')
const func11 = () => {}
func11.inject = tokens('func10')
const func12 = () => {}
func12.inject = tokens('func11')
const func13 = () => {}
func13.inject = tokens('func12')
const func14 = () => {}
func14.inject = tokens('func13')
const func15 = () => {}
func15.inject = tokens('func14')
const func16 = () => {}
func16.inject = tokens('func15')
const func17 = () => {}
func17.inject = tokens('func16')
const func18 = () => {}
func18.inject = tokens('func17')
const func19 = () => {}
func19.inject = tokens('func18')
const func20 = () => {}
func20.inject = tokens('func19')
const func21 = () => {}
func21.inject = tokens('func20')
const func22 = () => {}
func22.inject = tokens('func21')
const func23 = () => {}
func23.inject = tokens('func22')
const func24 = () => {}
func24.inject = tokens('func23')
const func25 = () => {}
func25.inject = tokens('func24')
const func26 = () => {}
func26.inject = tokens('func25')
const func27 = () => {}
func27.inject = tokens('func26')
const func28 = () => {}
func28.inject = tokens('func27')
const func29 = () => {}
func29.inject = tokens('func28')
const func30 = () => {}
func30.inject = tokens('func29')
const func31 = () => {}
func31.inject = tokens('func30')
const func32 = () => {}
func32.inject = tokens('func31')
const func33 = () => {}
func33.inject = tokens('func32')
const func34 = () => {}
func34.inject = tokens('func33')
const func35 = () => {}
func35.inject = tokens('func34')
const func36 = () => {}
func36.inject = tokens('func35')
const func37 = () => {}
func37.inject = tokens('func36')
const func38 = () => {}
func38.inject = tokens('func37')
const func39 = () => {}
func39.inject = tokens('func38')
const func40 = () => {}
func40.inject = tokens('func39')
const func41 = () => {}
func41.inject = tokens('func40')
const func42 = () => {}
func42.inject = tokens('func41')
const func43 = () => {}
func43.inject = tokens('func42')
const func44 = () => {}
func44.inject = tokens('func43')
const func45 = () => {}
func45.inject = tokens('func44')
const func46 = () => {}
func46.inject = tokens('func45')
const func47 = () => {}
func47.inject = tokens('func46')
const func48 = () => {}
func48.inject = tokens('func47')
const func49 = () => {}
func49.inject = tokens('func48')
const func50 = () => {}
func50.inject = tokens('func49')

const injector = createInjector()
  .provideFactory('func1', func1)
  .provideFactory('func2', func2)
  .provideFactory('func3', func3)
  .provideFactory('func4', func4)
  .provideFactory('func5', func5)
  .provideFactory('func6', func6)
  .provideFactory('func7', func7)
  .provideFactory('func8', func8)
  .provideFactory('func9', func9)
  .provideFactory('func10', func10)
  .provideFactory('func11', func11)
  .provideFactory('func12', func12)
  .provideFactory('func13', func13)
  .provideFactory('func14', func14)
  .provideFactory('func15', func15)
  .provideFactory('func16', func16)
  .provideFactory('func17', func17)
  .provideFactory('func18', func18)
  .provideFactory('func19', func19)
  .provideFactory('func20', func20)
  .provideFactory('func21', func21)
  .provideFactory('func22', func22)
  .provideFactory('func23', func23)
  .provideFactory('func24', func24)
  .provideFactory('func25', func25)
  .provideFactory('func26', func26)
  .provideFactory('func27', func27)
  .provideFactory('func28', func28)
  .provideFactory('func29', func29)
  .provideFactory('func30', func30)
  .provideFactory('func31', func31)
  .provideFactory('func32', func32)
  .provideFactory('func33', func33)
  .provideFactory('func34', func34)
  .provideFactory('func35', func35)
  .provideFactory('func36', func36)
  .provideFactory('func37', func37)
  .provideFactory('func38', func38)
  .provideFactory('func39', func39)
  .provideFactory('func40', func40)
  .provideFactory('func41', func41)
  .provideFactory('func42', func42)
  .provideFactory('func43', func43)
  .provideFactory('func44', func44)
  .provideFactory('func45', func45)
  .provideFactory('func46', func46)
  .provideFactory('func47', func47)
  .provideFactory('func48', func48)
  .provideFactory('func49', func49)
  // .provideFactory('func50', func50)
