---
layout: docs
---
<span class="title">ByteArray</span><span class="type">class</span>

[bytearr.h](../file/bytearr.h.html)\[[26](../source/bytearr.h.html#26)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



'ByteArray' intrinsic class. This class provides a fixed-size array of
unsigned 8-bit byte values; each array element is an integer in the
range 0-255.

ByteArray is particularly useful for reading and writing binary files,
since it lets you manipulate the raw bytes in a file directly.

`intrinsic class `**`ByteArray`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ByteArray`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`copyFrom`](#copyFrom)[`digestMD5`](#digestMD5)[`fillValue`](#fillValue)[`length`](#length)[`mapToString`](#mapToString)[`packBytes`](#packBytes)[`readInt`](#readInt)[`sha256`](#sha256)[`subarray`](#subarray)[`unpackBytes`](#unpackBytes)[`writeInt`](#writeInt)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)[`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="copyFrom"></span>

`copyFrom (src, srcStartIndex, dstStartIndex, length)`

[bytearr.h](../file/bytearr.h.html)\[[70](../source/bytearr.h.html#70)\]



Copy bytes from the source array into this array. Bytes are copied into
this array starting at the given index. The specified number of bytes
are copied from the source array starting at the given index.



<span id="digestMD5"></span>

`digestMD5 ( )`

[bytearr.h](../file/bytearr.h.html)\[[213](../source/bytearr.h.html#213)\]



Get the MD5 digest of the string. This calculates the 128-bit RSA MD5
digest value, returning the digest as a 32-character string of hex
digits. The hash value is computed on the UTF-8 representation of the
string. If 'idx' and 'len' are specified, the give the range of bytes to
include in the hash; the default is to hash the whole array.



<span id="fillValue"></span>

`fillValue (val, startIndex?, length?)`

[bytearr.h](../file/bytearr.h.html)\[[78](../source/bytearr.h.html#78)\]



Fill bytes in this array with the given value. If no starting index or
length values are given, the entire array is filled with the given byte
value. The byte value must be an integer in the range 0 to 255.



<span id="length"></span>

`length ( )`

[bytearr.h](../file/bytearr.h.html)\[[55](../source/bytearr.h.html#55)\]



Get the number of bytes in the array. The length is fixed at creation
time.



<span id="mapToString"></span>

`mapToString (charset, startIndex?, length?)`

[bytearr.h](../file/bytearr.h.html)\[[88](../source/bytearr.h.html#88)\]



Convert a range of bytes in the array to a string, interpreting the
bytes in the array as characters in the given character set.

If the starting index and length are not given, the entire byte array is
converted to a string. 'charset' must be an object of intrinsic class
CharacterSet.



<span id="packBytes"></span>

`packBytes (idx, format, ...)`

[bytearr.h](../file/bytearr.h.html)\[[180](../source/bytearr.h.html#180)\]



Pack data values into bytes according to a format definition string, and
store the packed bytes in the byte array starting at the given index.

'idx' is the starting index in the array for the packed bytes. 'format'
is the format string, which specifies the binary representations to use
for the argument values. The remaining arguments after 'format' are the
data values to pack.

Returns the number of bytes written to the array. (More precisely,
returns the final write pointer as a byte offset from 'idx'. If a
positioning code like @ or X is used in the string, it's possible that
more bytes were actually written.)

You can also call packBytes a static method, on the ByteArray class
itself:

  
ByteArray.packBytes(format, ...)

The static version of the method packs the data into bytes the same way
the regular method does, but returns a new ByteArray object containing
the packed bytes. Note that there's no index argument with the static
version.

Refer to Byte Packing in the System Manual for details.



<span id="readInt"></span>

`readInt (startIndex, format)`

[bytearr.h](../file/bytearr.h.html)\[[127](../source/bytearr.h.html#127)\]



Read an integer value from the byte array. Reads bytes from the starting
index; the number of bytes read depends on the format. Returns an
integer giving the value read.

'format' gives the format of the integer to be read. This is a
combination (using '\|' operators) of three constants, giving the size,
byte order, and signedness of the value.

First, choose the SIZE of the value: FmtSize8, FmtSize16, FmtSize32, for
8-bit, 16-bit, and 32-bit integers, respectively.

Second, choose the BYTE ORDER of the value, as represented in the byte
array: FmtLittleEndian or FmtBigEndian. The standard T3 portable data
interchange format uses little-endian values; this is a format in which
the least-significant byte of a value comes first, followed by the
remaining bytes in ascending order of significance. The big-endian
format uses the opposite order. The byte order obviously is irrelevant
for 8-bit values.

Third, choose the SIGNEDNESS of the value: FmtSigned or FmtUnsigned.
Note that FmtUnsigned cannot be used with FmtSize32, because T3 itself
doesn't have an unsigned 32-bit integer type.

For example, to read a 16-bit unsigned integer in the standard T3
portable interchange format, you'd use

  
FmtUnsigned \| FmtSize16 \| FmtLittleEndian

For convenience, individual macros are also defined that pre-compose all
of the meaningful combinations; see below.

The byte array must be large enough to read the required number of bytes
starting at the given index. An "index out of range" exception is thrown
if there aren't enough bytes in the array to satisfy the request.



<span id="sha256"></span>

`sha256 (idx?, len?)`

[bytearr.h](../file/bytearr.h.html)\[[203](../source/bytearr.h.html#203)\]



Get the SHA-256 hash of the bytes in the array. This calculates the
256-bit Secure Hash Algorithm 2 hash value, returning the hash as a
64-character string of hex digits. The hash value is computed on the
UTF-8 representation of the string. If 'idx' and 'len' are specified,
they give the range of bytes to include in the hash; the default is to
hash the whole array.



<span id="subarray"></span>

`subarray (startIndex, length?)`

[bytearr.h](../file/bytearr.h.html)\[[62](../source/bytearr.h.html#62)\]



create a new ByteArray as a copy of the given range of this array; if
the length is not given, bytes from the starting index to the end of
this array are included in the new array



<span id="unpackBytes"></span>

`unpackBytes (idx, format)`

[bytearr.h](../file/bytearr.h.html)\[[193](../source/bytearr.h.html#193)\]



Unpack bytes from the byte array starting at the given index, and
translate the bytes into data values according to the given format
string.

'idx' is the starting index in the array for the unpacking, and 'format'
is the format string. Returns a list of the unpacked values.

Refer to Byte Packing in the System Manual for details.



<span id="writeInt"></span>

`writeInt (startIndex, format, val)`

[bytearr.h](../file/bytearr.h.html)\[[151](../source/bytearr.h.html#151)\]



Write an integer value to the byte array. Writes bytes starting at the
given index; the number of bytes written depends on the format. The
'format' parameter gives the format, using the same codes as in
readInt(). 'val' is the integer value to be written. If 'val' is outside
of the bounds of the format to be written, the written value is
truncated.

The byte array must be large enough to hold the number of bytes required
by the format starting at the starting index. An "index out of range"
exception is thrown if the byte array doesn't have enough space to store
the value.

The value is not checked for range. If the value is outside of the range
that the format is capable of storing, the value stored will be
truncated to its least significant bits that fit the format. For
example, attempting to store 0xABCD in an 8-bit format will store only
0xCD.

Note that the signedness doesn't matter when writing a value. The
signedness is important only when reading the value back in.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


